package com.application.ubicare.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import com.application.ubicare.dto.user.PwdUpdateDTO;
import com.application.ubicare.entity.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {
    Page<User> findAll(Pageable page);
    User findByUserId(String userId);
    Optional<User> findByUserIdAndUserPw(String userId, String userPw);

    @Transactional
    @Modifying
    @Query("update User u set u.userPw = :#{#dto.pwd} " +
            "where u.userIdx = :#{#dto.userIdx}")
    int updatePwdByIdx(@Param("dto") PwdUpdateDTO dto);


    @Transactional
    @Modifying
    @Query("delete from User u Where u.userIdx = :userIdx")
    int deleteUserByIdx(@Param("userIdx") Integer userIdx);
}