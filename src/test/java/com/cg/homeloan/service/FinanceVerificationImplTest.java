package com.cg.homeloan.service;

import java.time.LocalDate;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.cg.homeloan.entities.FinanceVerificationOfficer;
import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.entities.Status;

/**
 * 
 * @author VINAYA SREE,Sowmya
 *
 */

@ExtendWith({ SpringExtension.class })
@DataJpaTest
@Import({FinanceVerificationImpl.class,LoanApplicationImpl.class})
//@Import(LoanApplicationImpl.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class FinanceVerificationImplTest {
	@Autowired
	private IFinanceVerificationService fService;
	
	@Autowired
	private ILoanApplicationService lService;
	
	@Test
	public void testAddOfficer() {
		FinanceVerificationOfficer finVerOff=new FinanceVerificationOfficer("surendar", "7654321678");
		FinanceVerificationOfficer exFinanceVerificationOfficer = fService.addOfficer(finVerOff);
		Assertions.assertEquals(exFinanceVerificationOfficer.getFinOfficerName(), finVerOff.getFinOfficerName());
	}
	
	
	@Test
	public void testUpdateStatus() {
		
		LoanApplication lApp=lService.addLoanApplication(new LoanApplication(123, LocalDate.parse("2020-08-22"), 600000, 60000,false ,true , false, Status.PENDING));
		//lApp.setLandVerificationApproval(true);
		//lApp.setStatus(Status.WAITING_FOR_LAND_VERIFICATION_OFFICE_APPROVAL);
		
		LoanApplication exLoanApplication = fService.updateStatus(lApp);
		//Assertions.assertEquals(exLoanApplication.getStatus(), lApp.getStatus());
		Assertions.assertEquals(exLoanApplication.isFinanceVerificationApproval(),lApp.isFinanceVerificationApproval());
	}
}
