package com.application.mornitoring.utils;

public class ObjectToType {
  public static Integer ObjectToInteger(Object value) {
    if (value.getClass().getName().equals("java.lang.Integer")) {
      return (Integer) value;
    }
    else {
      return Integer.parseInt((String) value);
    }
  }

  public static String ObjectToString(Object value) {
    if (value.getClass().getName().equals("java.lang.Integer")) {
      return String.valueOf((Integer) value);
    }
    else {
      return (String) value;
    }
  }
}