package com.application.mornitoring.repository;

import com.application.mornitoring.entity.CareLog;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CareLogRepository extends PagingAndSortingRepository<CareLog, Integer> {
}