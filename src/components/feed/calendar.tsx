import { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import dayjs from 'dayjs';
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import weekdayPlugin from "dayjs/plugin/weekday";

export default function Calendar() {

  const router = useRouter(); //go to workout page

  const dateFormat = "MMM, YYYY";

  dayjs.extend(weekdayPlugin);
  dayjs.extend(objectPlugin);
  dayjs.extend(isTodayPlugin);

  const now = dayjs();
  const [currentMonth, setCurrentMonth] = useState(now);
  const [arrayOfDays, setArrayOfDays] = useState([]);

  //increment currentMonth
  const nextMonth = () => {
    const next = currentMonth.add(1, "month");
    setCurrentMonth(next);
  }

  //decrement currentMonth
  const prevMonth = () => {
    const prev = currentMonth.subtract(1, "month");
    setCurrentMonth(prev);
  }

  const RenderHeader = () => {
    return(
      <View className="flex-row justify-between">
        <Text className="text-zinc-400 text-2xl font-sans font-semibold">{currentMonth.format(dateFormat)}</Text>
        <View className="flex-row mb-3">
          <TouchableOpacity
            className="pr-3"
            onPress={() => prevMonth()}
          >
            <Ionicons name="chevron-back-outline" size={26} color="#A1A1AA" />
          </TouchableOpacity>

          <TouchableOpacity
            className="pl-3"
            onPress={() => nextMonth()}
          >
            <Ionicons name="chevron-forward-outline" size={26} color="#A1A1AA" />
            </TouchableOpacity>
        </View>
      </View>
    )
  }

  const RenderDay = () => {
    const dayFormat = "dddd";
    const days = [];
    for (let i=0; i<7; i++) {
      days.push(
        <View key={i} className="w-[14.2%] items-center">
          <Text className="text-zinc-400 text-sm font-bold font-sans">{now.day(i).format(dayFormat).charAt(0)}</Text>
        </View>
      )
    }
    return <View className="flex-1 flex-row w-full justify-between my-2">{days}</View>
  }

  const formatDateToObject = (date) => {

    const clonedObject = { ...date.toObject() };

    const formattedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === currentMonth.month(),
      isCurrentDay: date.isToday()
    }

    return formattedObject;
  }

  const getAllDays = () => {

    let currentDate = currentMonth.startOf("month").weekday(0);
    const nextMonth = currentMonth.add(1, "month").month();

    let allDates = [];
    let weekDates = [];
    let weekCounter = 1;

    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formated = formatDateToObject(currentDate);
      weekDates.push(formated);
      if (weekCounter === 7) {
        allDates.push({ dates: weekDates });
        weekDates = [];
        weekCounter = 0;
      }
      weekCounter++;
      currentDate = currentDate.add(1, "day");
    }

    setArrayOfDays(allDates);

  };

  useEffect(() => {
    getAllDays();
  }, [currentMonth]);

  //dummy data --- DELETE !!!
  const [workoutDays, setWorkoutDays] = useState([
    '2025-05-24',
    '2025-05-25',
    '2025-05-26',
    '2025-05-28',
    '2025-05-29',
    '2025-05-30',
    // ...
  ]);

  const RenderCells = () => {

      const rows = (arrayOfDays ?? []).map((week, i) => {
          const days = week.dates.map((day, j) => {
              const baseStyle = 'w-[14.2%] aspect-square items-center justify-center';
              const textStyle = 'text-zinc-400 text-sm font-sans';

              //UPDATE THIS WITH DATABASE
              const dayString = dayjs(new Date(day.year, day.month, day.day)).format('YYYY-MM-DD');
              const workedOut = workoutDays.includes(dayString);

              const bgStyle = workedOut
                ? 'bg-red-900 rounded-lg w-6 h-6 justify-center items-center'
                : !day.isCurrentMonth
                ? 'opacity-30'
                : '';

              return (
                <View key={`${i}-${j}`} className={`${baseStyle}`}>
                  <TouchableOpacity
                      className={`${bgStyle}`}
                      onPress={() => console.log('day', day)}
                  >
                      <Text className={textStyle}>{day.day}</Text>
                  </TouchableOpacity>
                </View>
              );
          });

          return (
              <View key={i} className="flex-row">
                  {days}
              </View>
          );
      });

      return <View>{rows}</View>;
  };

  return(
    <View className="flex-1 p-6">
      <RenderHeader />
      <RenderDay />
      <RenderCells />
    </View>
  )
}
