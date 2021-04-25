package com.cg.homeloan.service;

import static org.junit.Assert.*;

import java.time.LocalDate;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.cg.homeloan.entities.Customer;

@ExtendWith({SpringExtension.class})
@DataJpaTest
@Import(CustomerServiceImpl.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class CustomerServiceImplTest {
	
	private ICustomerService cService;
	
	@Test
	public void testAddCustomer() {
		
			String date="2000-03-15";
			Customer cust = new Customer("pravs12","Pravallika","9807645321","pthadisina1234@gmail.com",LocalDate.parse(date),"female","Indian","54321678907654","BNHV123N45");
			Customer custSaved = cService.addCustomer(cust);
			Assertions.assertEquals(custSaved.getCustomerName(), cust.getCustomerName());
		
	}

}
//private int userId;
//private String customerName;
//private String mobileNumber;
//private String emailId;
//private LocalDate dateOfBirth;
//private String gender;
//private String nationality;
//private String aadharNumber;
//private String panNumber;