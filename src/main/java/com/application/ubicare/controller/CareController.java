package com.application.ubicare.controller;

import java.util.List;

import com.application.ubicare.entity.CareLog;
import com.application.ubicare.entity.Module;
import com.application.ubicare.repository.CareLogRepository;
import com.application.ubicare.repository.ModuleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CareController {
  @Autowired
  public CareLogRepository careLogRepository;
  @Autowired
  public ModuleRepository moduleRepository;


  /**
   * 정보 조회
   * @param moduleIdx
   * @return
   */
  @GetMapping("/api/care/search/graph")
  public List<CareLog> careLogSearch(@RequestParam("moduleIdx") int moduleIdx) {
    Module module = moduleRepository.findByModuleIdx(moduleIdx);
    return careLogRepository.findTop24ByModuleOrderByRgstDtDesc(module);
  }
}

