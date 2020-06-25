package com.application.mornitoring.utils;

public class NumericChecker {
  public static Boolean numericChecker(String target) {
    boolean result = true;
    
    try {
      Double.parseDouble(target);
    } catch (NumberFormatException e) {
      result = false;
    }

    return result;
  }
}