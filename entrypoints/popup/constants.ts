export const INITIAL_CHAT = `### **Priority**

(**P1 - Resolve Immediately** or **P2 - Give High Attention** or **P3 - Normal Queue** or **P4 - Low Priority**)

The priority of the test that will be used when deciding the need for Automation or execution as part of regression

### **Components**

****Need to add this as a component to all test cases. 

Assist in categorizing test cases based on corresponding functions or components. 

Allows testers to easily classify them during test case selection or automation implementation.

### **Test Areas (Select one)**

1. **01 - Performance (KPI):** Measure and evaluate the system's performance based on key performance indicators (KPIs).
2. **02 - Capacity & Stress:** Test the system's capacity and assess its ability to handle load and stress.
3. **03 - Robustness & Recovery:** Test the system's ability to resist and recover from error situations and failures.
4. **04 - Interoperability & Interworking:** Test the system's ability to interact and work with other systems.
5. **05 - Configuration & Provisioning:** Test the system's capability to configure and provision resources.
6. **06 - Documentation:** Test the completeness and accuracy of instructional and user documentation.
7. **07 - Compliance:** Test to ensure that the system complies with regulations and standards.
8. **08 - Fault Management:** Test the system's fault management and error-handling capabilities.
9. **09 - Error Path & Negative Scenarios:** Test scenarios with error paths and negative situations.
10. **10 - Upgrade & Backup:** Test the system upgrade process and the ability to recover from backups.
11. **11 - Security & Vulnerability:** Test for security vulnerabilities and ensure the system's safety.
12. **12 - Backwards Compatibility:** Test the ability to operate with previous versions of the system.
13. **13 - User Interface:** Test the user interface for aesthetics and ease of use.
14. **14 - Clients:** Test applications or client devices that interact with the system.
15. **15 - Installation & Media Validation:** Test the installation process and validate the legitimacy of the media.
16. **16 - Operational:** Test the system's ability to operate in real-world conditions and production environments.

### **Test Activities (Select multiple)**

**Sanity Testing:**

- **Definition:** A subset of test cases that are performed to quickly determine if a new software version or build is stable and can proceed with more comprehensive testing.
- **Purpose:** Ensure that the critical functionalities of the application are working as expected after changes.

**Regression Testing:**

- **Definition:** Testing of a software application to ensure that new code changes do not adversely affect existing features. It involves executing the test cases that cover the impacted functionalities.
- **Purpose:** Detect and fix bugs introduced by new changes without compromising the existing functionalities.

**System Testing:**

- **Definition:** Testing the entire system as a whole to ensure that all components work together seamlessly, and the software meets specified requirements.
- **Purpose:** Verify that the complete system behaves according to the defined specifications and functionalities.

**Integration Testing:**

- **Definition:** A testing approach where different components or systems are combined and tested as a group. It aims to identify issues in the interaction between integrated components.
- **Purpose:** Ensure that the interactions between integrated components do not result in unexpected behavior and that the system functions as intended.

**Smoke Testing:**

- **Definition:** A preliminary test to quickly check if the core functionalities of a software build are working, ensuring it is stable enough for more detailed testing.
- **Purpose:** Identifies critical issues early in the development process, helping decide whether the build is ready for further testing or requires fixes.

**User Acceptance Testing (UAT):**

- **Definition:** The final testing phase where end-users evaluate the software to ensure it meets business requirements and is ready for production use.
- **Purpose:** Validates that the software aligns with user expectations, satisfies business needs, and is suitable for deployment.

**Performance Testing:**

- **Definition:** Evaluate a system's speed, scalability, and reliability under different conditions to ensure optimal performance.
- **Purpose:** Identifies bottlenecks, optimizes efficiency, and ensures the system can handle expected loads.

> *Note: All test will have either the "System" or "UAT" as the test activities. Additionally, add the other test activity will be applicable for the testcase.*`;

export const RESPONSE_INITIAL_CHAT = `The document you provided outlines a great structure for defining test cases. Here's a breakdown of each section:

**Priority:**

This section helps determine the order in which tests are executed.
- **P1 - Resolve Immediately:** Critical tests that must pass before proceeding.
- **P2 - Give High Attention:** Important tests with potential to cause major issues.
- **P3 - Normal Queue:** Standard tests covering core functionalities.
- **P4 - Low Priority:** Tests for less critical functionalities or edge cases.

**Components:**

This section categorizes tests based on their functionality or the part of the system they target.
This helps testers quickly identify relevant tests during selection or automation.

**Test Areas (Select one):**

This section identifies the specific area of system functionality being tested. Choose the most relevant option from the list:
01 - Performance (KPI)
02 - Capacity & Stress
(and so on)

**Test Activities (Select multiple):**

This section identifies the type of testing performed for a particular test case. You can select multiple options:
Sanity Testing - Quick checks for basic functionality after changes.
Regression Testing - Ensures new changes haven't broken existing features.
System Testing - Verifies entire system works as intended.
Integration Testing - Checks interactions between integrated components.
Smoke Testing - Basic checks for core functionality stability.
User Acceptance Testing (UAT) - End-user evaluation for business needs.
Performance Testing - Evaluates speed, scalability, and reliability under load.

> *Note: Every test case should be assigned either "System" or "UAT" as the primary test activity.
Additional test activities can be selected as applicable for each test case.
This structure provides a clear and organized way to define test cases, making it easier to prioritize, categorize, and execute them effectively.*`;
