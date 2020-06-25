package com.application.mornitoring.repository;

import com.application.mornitoring.entity.GasLog;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GasLogRepository extends PagingAndSortingRepository<GasLog, Integer> {
}