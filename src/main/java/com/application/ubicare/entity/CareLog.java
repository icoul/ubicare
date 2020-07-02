package com.application.ubicare.entity;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="care_log_tb")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class CareLog {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "log_idx")
  private int logIdx;

  @Column(name = "measure_dtm")
  private String measureDtm;

  @ManyToOne
  @JoinColumn(name = "module_idx")
  private Module module;

  @Column(name = "`A1`")
  private Double bodyTemp;
  private Double temperature;
  private Double humidity;
  private Double rssi;
  private Double sf;
  private Double freqeuncy;
  private Double snr;
  private String battery;

  @Column(name = "rgst_dt")
  private Date rgstDt;
}