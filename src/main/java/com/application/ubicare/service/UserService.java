package com.application.ubicare.service;

import java.util.List;
import java.util.Map;

import com.application.ubicare.dto.user.UserDTO;
import com.application.ubicare.entity.User;

public interface UserService {
  User convertDataToUser(Map<String, Object> inputData);
  List<UserDTO> getUserAndCareData();
}