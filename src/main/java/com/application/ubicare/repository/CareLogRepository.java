package com.application.ubicare.repository;

import com.application.ubicare.entity.CareLog;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface CareLogRepository extends PagingAndSortingRepository<CareLog, Integer> {
}