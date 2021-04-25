package com.cg.homeloan.service;

import java.time.LocalDate;
import java.util.List;

import com.cg.homeloan.entities.Customer;
import com.cg.homeloan.exception.CustomerNotFoundException;
import com.cg.homeloan.repository.ICustomerRepository;


public interface ICustomerService  {
	public Customer addCustomer(Customer customer) ;
	public Customer updateCustomer(Customer customer) ;
	public Customer deleteCustomer(Customer customer);
	public Customer viewCustomer(String id) ;
	public List<Customer> viewAllCustomers();
	public List<Customer> viewCustomerList(LocalDate dateOfApplication);
	


}
