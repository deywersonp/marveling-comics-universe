interface FormatDataProps {
  date: string;
  format?: 'date' | 'time' | 'date-time';
}

const locale = 'pt-Br';
const timeZone = "America/Sao_Paulo";

export const formatDate = ({ date, format = 'date-time' }: FormatDataProps) => {
  if (format === 'time') {
    return new Date(date).toLocaleTimeString(locale, { timeZone });
  }

  if (format === 'date') {
    return new Date(date).toLocaleDateString(locale, { timeZone });
  }

  return new Date(date).toLocaleString(locale, { timeZone });
}