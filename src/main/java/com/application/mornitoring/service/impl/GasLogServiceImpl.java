package com.application.mornitoring.service.impl;

import javax.persistence.*;

import com.application.mornitoring.service.GasLogService;

import org.springframework.stereotype.Service;

@Service
public class GasLogServiceImpl implements GasLogService {
  final String PERSISTENCE_UNIT_NAME = "jpa";
  EntityManagerFactory emf = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
}