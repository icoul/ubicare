package com.application.mornitoring.entity;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

/*
* 가스 5종 Entity
* module_scn: 0
*/
@Getter
@Setter
@Entity
@Table(name="gas_log_tb")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class GasLog {
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
  private Double o2;
  @Column(name = "`A2`")
  private Double h2s;
  @Column(name = "`A3`")
  private Double co;
  @Column(name = "`A4`")
  private Double co2;
  @Column(name = "`A5`")
  private Double ch4;
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