package com.application.ubicare.dto.user;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDTO{
  private int userIdx;
  private String userNm;
  private int moduleIdx;
  private String areaNm;
  private Double bodyTemp;
  private Date inDt;
  private Date outDt;
}