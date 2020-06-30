package com.application.ubicare.controller;

import java.util.List;

import com.application.ubicare.entity.CareLog;
import com.application.ubicare.entity.Module;
import com.application.ubicare.repository.CareLogRepository;
import com.application.ubicare.repository.ModuleRepository;
import com.application.ubicare.utils.PageableRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
   * 정보 조회 그래프용
   * @param moduleIdx
   * @return
   */
  @GetMapping("/api/care/search/graph")
  public List<CareLog> careLogSearchForGraph(@RequestParam("moduleIdx") int moduleIdx) {
    Module module = moduleRepository.findByModuleIdx(moduleIdx);
    return careLogRepository.findTop10ByModuleOrderByRgstDtDesc(module);
  }


  /**
   * 정보 조회 테이블용
   * @param moduleIdx
   * @return
   */
  @GetMapping("/api/care/search")
  public Page<CareLog> careLogSearch(@RequestParam("pageIndex") int pageIndex,
                                     @RequestParam("pageSize") int pageSize,
                                     @RequestParam("pageCount") int pageCount,
                                     @RequestParam("elementCount") int elementCount,
                                     @RequestParam("moduleIdx") int moduleIdx) {
    Pageable paging = PageableRequest.setPageableObject(pageIndex, pageSize);
    Module module = moduleRepository.findByModuleIdx(moduleIdx);
    return careLogRepository.findByModuleOrderByRgstDtDesc(module, paging);
  }
}

