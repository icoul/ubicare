package com.application.mornitoring.service.impl;

import java.util.Map;

import com.application.mornitoring.entity.User;
import com.application.mornitoring.repository.UserRepository;
import com.application.mornitoring.service.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
  @Autowired
  UserRepository userRepository;
  @Autowired
  private ModelMapper modelMapper;

  public User convertDataToUser(Map<String, Object> inputData) {
    modelMapper.getConfiguration().setAmbiguityIgnored(true);
    User user = new User();
    modelMapper.map(inputData, user);

    return user;
  }
}