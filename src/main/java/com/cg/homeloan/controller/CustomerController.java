package com.cg.homeloan.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.homeloan.dto.CreateCustomer;
import com.cg.homeloan.dto.CustomerDetails;
import com.cg.homeloan.entities.Customer;
import com.cg.homeloan.exception.CustomerNotFoundException;
import com.cg.homeloan.repository.ICustomerRepository;
import com.cg.homeloan.service.ICustomerService;
import com.cg.homeloan.util.CustomerUtil;

@RestController
@RequestMapping("/customer")
@Validated
public class CustomerController {

	@Autowired
	private ICustomerService service;
	@Autowired
	private CustomerUtil cList;

	@ResponseStatus(code=HttpStatus.CREATED)
	@PostMapping("/add")
	public CustomerDetails addCustomer(@RequestBody @Valid CreateCustomer reqData)
	{
		Customer cust=new Customer(reqData.getCust_id(),reqData.getCustomerName(),reqData.getMobileNumber(),reqData.getEmailId(),reqData.getDateOfBirth(),reqData.getGender(),reqData.getNationality(),reqData.getAadharNumber(),reqData.getPanNumber(),reqData.getUser());
		Customer customer=service.addCustomer(cust);
		CustomerDetails details=cList.toDetails(customer);
		return details;
		
	}
	
	@GetMapping("/view/{id}")
	public CustomerDetails findById(@PathVariable("id") String id) 
	{
		Customer cust=service.viewCustomer(id);
		CustomerDetails details=cList.toDetails(cust);
		return details;
		
		

		
	}
	@PutMapping("/update/{id}")
	public Customer updateCustomer(@RequestBody Customer reqData,@PathVariable("id")String id) {
		
		reqData.setUserId(id);
		return service.updateCustomer(reqData);
		
	}
	@GetMapping
	public List<CustomerDetails> findAll()

	{
		List<Customer> list=service.viewAllCustomers();
		List<CustomerDetails> custList=cList.toDetails(list);
		return custList;
		
	}
	@DeleteMapping("/delete/{id}")
	public Customer deleteCustomer(@PathVariable ("id") String id)
	{
		Customer cust=service.deleteCustomer(new Customer(id));
		return cust;
		
	}
	
}
