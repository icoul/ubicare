package com.application.ubicare.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PwdUpdateDTO{
    private Integer userIdx;
    private String pwd;
}