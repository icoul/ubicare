package com.application.mornitoring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

import com.application.mornitoring.dto.user.LoginCheckDTO;
import com.application.mornitoring.dto.user.PwdUpdateDTO;
import com.application.mornitoring.entity.User;
import com.application.mornitoring.repository.UserRepository;
import com.application.mornitoring.service.UserService;
import com.application.mornitoring.utils.PageableRequest;

@RestController
public class UserController {
  @Autowired
  public UserService userService;

  @Autowired
  public UserRepository userRepository;

  /**
   * 사용자 로그인 체크
   * @param user
   * @return
   */
  @PostMapping("/api/user/loginCheck")
  public Object loginCheck(@RequestBody LoginCheckDTO user){
    Optional<User> result = userRepository.findByUserIdAndUserPw(user.getUserId(), user.getEncodePw());

    if (result.isPresent()) {
      return result.get();
    }

    return new ResponseEntity<>("{error: \"PASSWORD IS NOT CORRECT\"}", HttpStatus.BAD_REQUEST);
  }

  /**
   * 사용자 데이터 조회
   * @param pageIndex
   * @param pageSize
   * @return
   */
  @GetMapping("/api/user/getDatas")
  public Page<User> getUserData(@RequestParam("pageIndex") int pageIndex,
                                @RequestParam("pageSize") int pageSize){
    Pageable page = PageableRequest.setPageableObject(pageIndex, pageSize);
    return userRepository.findAll(page);
  }

  /**
   * 사용자 데이터 삽입
   * @param inputData
   * @return
   */
  @PostMapping("/api/user/insertData")
  public User insertUserData(@RequestBody Map<String, Object> inputData){
    User user = userService.convertDataToUser(inputData);
    return userRepository.save(user);
  }

  /**
   * 사용자 데이터 수정 - 비밀번호 제외
   * @param inputData
   * @return
   */
  @PostMapping("/api/user/updateData")
  public Integer updateUserData(@RequestBody Map<String, Object> inputData){
    User user = userService.convertDataToUser(inputData);
    return userRepository.updateUserById(user);
  }
  
  /**
   * 사용자 비밀번호 변경
   * @param dto
   * @return
   */
  @PostMapping("/api/user/updatePwd")
  public Integer updatePwd(@RequestBody PwdUpdateDTO dto){
    return userRepository.updatePwdByIdx(dto);
  }

  /**
   * 사용자 삭제
   * @param userIdx
   * @return
   */
  @PostMapping("/api/user/deleteUser")
  public Integer deleteUser(@RequestBody Map<String, Integer> inputData){
    return userRepository.deleteUserByIdx(inputData.get("userIdx"));
  }
}