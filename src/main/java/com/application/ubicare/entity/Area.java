package com.application.ubicare.entity;

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
@Table(name="area_tb")
public class Area {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "area_idx")
  private int moduleIdx;

  @Column(name = "area_nm")
  private String areaNm;

  @Column(name = "x_axis")
  private int xAxis;

  @Column(name = "y_axis")
  private int yAxis;

  @Column(name = "rgst_id")
  private String rgstId;

  @Column(name = "rgst_dt")
  private Date rgstDt;
}