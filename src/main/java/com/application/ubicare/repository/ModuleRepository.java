package com.application.ubicare.repository;

import com.application.ubicare.entity.Module;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<Module, Integer> {
}