# Stage 1: Build WAR
FROM maven:3.9.11-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the WAR
FROM eclipse-temurin:21-jre-ubi9-minimal
WORKDIR /app
COPY --from=build /app/target/*.war app.war
EXPOSE 2025
ENTRYPOINT ["java","-jar","app.war"]
