package com.application.ubicare.service.impl;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.application.ubicare.dto.user.UserDTO;
import com.application.ubicare.entity.User;
import com.application.ubicare.repository.UserRepository;
import com.application.ubicare.service.UserService;

import org.modelmapper.ModelMapper;
import org.qlrm.mapper.JpaResultMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
  @PersistenceContext
  private EntityManager em;
  @Autowired
  UserRepository userRepository;
  @Autowired
  private ModelMapper modelMapper;

  public User convertDataToUser(Map<String, Object> inputData) {
    modelMapper.getConfiguration().setAmbiguityIgnored(true);
    User user = new User();
    modelMapper.map(inputData, user);

    return user;
  }

  public List<UserDTO> getUserAndCareData() {
    String sql = "SELECT u.user_idx AS userIdx, u.user_nm AS userNm, u.module_idx AS moduleIdx, a.area_idx AS areaIdx, a.area_nm AS areaNm, u.bodyTemp, " +
                 "       u.in_dt AS inDt, u.out_dt AS outDt, CASE WHEN u.in_dt IS NULL THEN 1 ELSE 0 END AS orderNum " +
                 "FROM area_tb a LEFT JOIN " +
                 "( " +
                 "  SELECT ut.*, c.A1 AS bodyTemp " +
                 "  FROM user_tb ut RIGHT JOIN (SELECT * FROM care_log_tb GROUP BY module_idx ORDER BY module_idx DESC) c ON ut.module_idx = c.module_idx " +
                 ") u on u.area_idx = a.area_idx " +
                 "ORDER BY orderNum, u.in_dt ";

    Query nativeQuery = em.createNativeQuery(sql);
    JpaResultMapper jpaResultMapper = new JpaResultMapper();
    List<UserDTO> userLog = jpaResultMapper.list(nativeQuery, UserDTO.class);
    
    return userLog;
  }
}