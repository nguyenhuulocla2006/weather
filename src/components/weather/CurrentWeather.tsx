'use client';

import { useWeather } from '@/hooks/useWeather';
import { Skeleton } from '@/components/ui/skeleton';
import { WeatherCard } from './WeatherCard';

type Props = {
  latitude: number;
  longitude: number;
};

export default function CurrentWeather({ latitude, longitude }: Props) {
  const { data, isLoading, isError } = useWeather({ latitude, longitude });

  if (isLoading) {
    return (
      <div className="p-4 rounded-xl border bg-white dark:bg-zinc-900 shadow space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="p-4 rounded-xl bg-red-100 text-red-800 dark:bg-red-900 dark:text-white">
        Lỗi khi tải dữ liệu thời tiết.
      </div>
    );
  }

  const current = data.current;

  return (
    <WeatherCard
      temperature={current.temperature_2m}
      humidity={current.relative_humidity_2m}
      windSpeed={current.wind_speed_10m}
      uvIndex={current.uv_index}
      weatherCode={current.weathercode}
    />
  );
}
