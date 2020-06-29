package com.application.ubicare.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTimeToDateConverter {
  public static Date dateTimeToDateConverter(String dateTime, String format) {
    try {
      Date date = new SimpleDateFormat(format).parse(dateTime);
      return date;
    } catch (ParseException e) {
      e.printStackTrace();
      return new Date();
    }
  }
}