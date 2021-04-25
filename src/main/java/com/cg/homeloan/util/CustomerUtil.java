package com.cg.homeloan.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cg.homeloan.dto.CustomerDetails;
import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.Customer;
import com.cg.homeloan.entities.User;

@Component
public class CustomerUtil {
	public CustomerDetails toDetails(Customer cust)
	{
		User user=cust.getUser();
		UserDetails ud=new UserDetails(user);
		CustomerDetails custDetails=new CustomerDetails(cust.getUserId(),cust.getCustomerName(),cust.getMobileNumber(),cust.getEmailId(),cust.getDateOfBirth(),cust.getGender(),cust.getNationality(),cust.getAadharNumber(),cust.getPanNumber(),ud);
		return custDetails;
		
	}
	public List<CustomerDetails> toDetails(List<Customer> list)
	{
		List<CustomerDetails> customerDetailsList=new ArrayList<>();
		for(Customer customer:list)
		{
			customerDetailsList.add(toDetails(customer));
		}
		return customerDetailsList;
	}
}
//{
//    
//    "applicationDate":"2021-04-29",
//    "loanAppliedAmount":660000,
//    "loanApprovedAmount":330000,
//    "landVerificationApproval":"false",
//    "financeVerificationApproval":"false",
//    "adminApproval":"false",
//    "status":"DOCUMENTS_NOT_UPLOADED",
//    "customer":{
//        "userId":"sushma13",
//		"customerName":"Sushma",
//		"mobileNumber":"9087654321",
//		"emailId":"sushma.bvrit@gmail.com",
//	    "dateOfBirth":"2000-09-23",
//		"gender":"female",
//		"nationality":"Indian",
//		"aadharNumber":"543456789021",
//	    "panNumber":"BVCT0NN23WE",
//        "user":{"userId":5678,
//        "password":"vcnjsd",
//        "role":"admin"}
//    
//}
//
//}