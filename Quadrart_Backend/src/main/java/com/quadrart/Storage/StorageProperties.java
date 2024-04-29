package com.quadrart.Storage;

import org.springframework.boot.context.properties.ConfigurationProperties;

/*
 * Cria uma classe de propriedades do Storage, definindo por exemplo
 * o local onde essa pasta irá se localizar.
 */
@ConfigurationProperties("storage")
public class StorageProperties {
    
    private String location = "INSIRA O CAMINHO PARA INSERIR AS IMAGENS ";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location){
        this.location = location;
    }

}
