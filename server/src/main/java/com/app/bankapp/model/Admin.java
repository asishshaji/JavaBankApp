package com.app.bankapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
  @Id
  @Column(name = "username")
  private String username;

  public Admin() {}

  public Admin(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Admin username(String username) {
    setUsername(username);
    return this;
  }

  public Admin password(String password) {
    setPassword(password);
    return this;
  }

  @Override
  public String toString() {
    return (
      "{" +
      " username='" +
      getUsername() +
      "'" +
      ", password='" +
      getPassword() +
      "'" +
      "}"
    );
  }

  @Column(name = "password")
  private String password;
}
