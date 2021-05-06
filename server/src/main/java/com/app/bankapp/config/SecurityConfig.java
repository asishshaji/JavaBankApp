package com.app.bankapp.config;

import com.app.bankapp.utils.JWTAuthorizationFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf()
      .disable()
      .addFilterAfter(
        new JWTAuthorizationFilter(),
        UsernamePasswordAuthenticationFilter.class
      )
      .authorizeRequests()
      .antMatchers("/api/v1/customer/**", "/api/v1/bank/**")
      .permitAll()
      .anyRequest()
      .authenticated();
  }
}
