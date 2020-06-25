package com.application.mornitoring.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="user_tb")
public class User{
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_idx")
  private int userIdx;

  @Column(name = "user_id")
  private String userId;

  @Column(name = "user_pw")
  private String userPw;

  @Column(name = "user_nm")
  private String userNm;

  @Column(name = "dept_id")
  private String deptId;

  @Column(name = "dept_nm")
  private String deptNm;

  @Column(name = "tel_no_1")
  private String telNo1;

  @Column(name = "tel_no_2")
  private String telNo2;

  private String addr;
  private String rem;

  @Column(name = "rgst_id")
  private String rgstId;
  
  @Column(name = "rgst_dt")
  private Date rgstDt;
}