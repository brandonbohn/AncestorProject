package com.ancestors2.ancestors.model;


    
        import java.util.List;

import jakarta.persistence.Column;
        import jakarta.persistence.Entity;
        import jakarta.persistence.GeneratedValue;
        import jakarta.persistence.GenerationType;
        import jakarta.persistence.Id;
        import jakarta.persistence.Table;
        
        
        
        @Entity
            @Table(name="Users")
    
        public class User {
 
            @Id
         @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        
            @Column(name="firstName")
            private String firstName;
        
             @Column(name="lastName")
            private String lastName;
        
             @Column(name="email")
            private String email;
        
             @Column(name="password")
            private String password;

             @Column(name="admin",nullable=false)
            private Boolean admin;

            public String getFirstName() {
                return firstName;
            }
        
            public void setFirstName(String firstName) {
                this.firstName = firstName;
            }
        
            public String getLastName() {
                return lastName;
            }
        
            public void setLastName(String lastName) {
                this.lastName = lastName;
            }
        
            public String getEmail() {
                return email;
            }
        
            public void setEmail(String email) {
                this.email = email;
            }
        
            public String getPassword() {
                return password;
            }
        
            public void setPassword(String password) {
                this.password = password;
            }

           

            public Boolean getAdmin() {
                return admin;
            }

            public void setAdmin(Boolean admin) {
                this.admin = admin;
            }

            public static List<Bohnfamilymember> getAncestor() {
                return null;
            }
        
        
        }
        
    
   
