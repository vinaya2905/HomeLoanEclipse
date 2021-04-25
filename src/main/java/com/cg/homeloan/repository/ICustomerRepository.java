package com.cg.homeloan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.homeloan.entities.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer,String> {
	//Optional<Customer> findById(String id);
//	@Modifying
//	@Query("update cust set mobile_num=:mobileNumber where cust_id=:userId")
//	
//	Customer updateCustomer(@Param("userId")String userId,@Param("mobieNumber") String mobileNumber);

	
	
//	public Customer addCustomer(Customer customer);
//	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;
//	public Customer deleteCustomer(Customer customer) throws CustomerNotFoundException;
//	public Customer viewCustomer(int custid) throws CustomerNotFoundException;
//	public List<Customer> viewAllCustomers();
//	public List<Customer> viewCustomerList(LocalDate dateOfApplication);
	

}
