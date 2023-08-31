package com.ancestors2.ancestors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.ancestors2.ancestors")
public class AncestorsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AncestorsApplication.class, args);
	}

}
