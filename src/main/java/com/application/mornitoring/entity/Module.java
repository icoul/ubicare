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
@Table(name="module_tb")
public class Module {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "module_idx")
  private int moduleIdx;

  @Column(name = "module_scn")
  private String moduleScn;

  @Column(name = "model_no")
  private String modelNo;

  @Column(name = "model_nm")
  private String modelNm;

  @Column(name = "module_type")
  private String moduleType;

  @Column(name = "area_nm")
  private String areaNm;

  @Column(name = "x_axis")
  private Double xAxis;

  @Column(name = "y_axis")
  private Double yAxis;

  @Column(name = "inst_nm")
  private String instNm;

  @Column(name = "rgst_id")
  private String rgstId;

  @Column(name = "rgst_dt")
  private Date rgstDt;
}