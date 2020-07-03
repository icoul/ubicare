package com.application.ubicare.dto.user;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDTO{
  private Integer userIdx;
  private String userNm;
  private Integer moduleIdx;
  private Integer areaIdx;
  private String areaNm;
  private Double bodyTemp;
  private Date inDt;
  private Date outDt;
  private Integer orderNum;
}