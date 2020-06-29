package com.application.ubicare.service.impl;

import javax.persistence.*;

import com.application.ubicare.service.CareLogService;

import org.springframework.stereotype.Service;

@Service
public class CareLogServiceImpl implements CareLogService {
  final String PERSISTENCE_UNIT_NAME = "jpa";
  EntityManagerFactory emf = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
}