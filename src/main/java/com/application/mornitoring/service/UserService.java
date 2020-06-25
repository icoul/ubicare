package com.application.mornitoring.service;

import java.util.Map;

import com.application.mornitoring.entity.User;

public interface UserService {
  User convertDataToUser(Map<String, Object> inputData);
}