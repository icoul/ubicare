package com.application.ubicare.repository;

import java.util.List;

import com.application.ubicare.entity.CareLog;
import com.application.ubicare.entity.Module;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CareLogRepository extends PagingAndSortingRepository<CareLog, Integer> {
	List<CareLog> findTop10ByModuleOrderByRgstDtDesc(Module module);
	Page<CareLog> findByModuleOrderByRgstDtDesc(Module module, Pageable pageable);
}