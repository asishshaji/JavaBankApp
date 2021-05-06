package com.app.bankapp.service;

import com.app.bankapp.model.Account;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface IBankService {
  public Account createAccount(Account account);

  public Account updateAccount(Account account);

  public List<Account> getAccounts();

  public Account getAccount(int id);
}
