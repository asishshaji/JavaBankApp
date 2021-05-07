package com.app.bankapp.controller;

import com.app.bankapp.model.Account;
import com.app.bankapp.model.Admin;
import com.app.bankapp.service.BankService;
import com.app.bankapp.utils.Helpers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/bank/")
public class BankController {
  @Autowired
  private BankService bankService;

  @PostMapping("/login")
  public Map<String, String> login(@RequestBody Admin admin) {
    Map<String, String> msg = new HashMap<>();
    if (
      admin.getPassword().equals("admin") && admin.getUsername().equals("admin")
    ) msg.put("token", Helpers.getJWTToken(admin.getUsername()));

    return msg;
  }

  @GetMapping("/account/{id}")
  public Account getUserAccount(@PathVariable Integer id) {
    return this.bankService.getAccount(id);
  }

  @PostMapping("/account/edit")
  public Account updateUserAccount(@RequestBody Account account) {
    System.out.println(account);
    return this.bankService.updateAccount(account);
  }

  @GetMapping("/accounts")
  public List<Account> getAccounts() {
    return bankService.getAccounts();
  }
}
