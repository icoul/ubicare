package com.application.ubicare.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginCheckDTO{
    private String userId;
    private String encodePw;
}