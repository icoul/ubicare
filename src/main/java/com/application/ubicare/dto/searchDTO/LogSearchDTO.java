package com.application.ubicare.dto.searchDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LogSearchDTO {
  private String date;
  private Integer moduleIdx;
  private Integer moduleScn;
  private String beginDate;
  private String endDate;
  private Integer beginTime;
  private Integer endTime;
}