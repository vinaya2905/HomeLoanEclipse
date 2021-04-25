package com.cg.homeloan.exception;

public class CustomerNotFoundException extends RuntimeException {

	public CustomerNotFoundException(String msg) {
		super(msg);
		
	}

	public CustomerNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

}
