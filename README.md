# Delitos-chile
Práctica visualización delitos con React, datos extraídos de [cead spd](http://cead.spd.gov.cl) [2005-2022]

## Para procesar la información
- Para obtener el mismo archivo de información http://cead.spd.gov.cl/estadisticas-delictuales/:
    - La configuración es la siguiente
        - **MEDIDA** Frecuencia
        - **TIPO DATOS** Casos Policiales
        - **DELITO** Regiones [ TOTAL PAÍS ]
        - **TEMPORALIDAD** Año [ 2005 a 2022 ] Mes [ Enero a Diciembre ]
    - Click en "Descargar Excel" y guardamos como **raw_data.xlsx** (archivo excel)
    - Después, se utilizó [Python (Jupyter notebook)](https://github.com/alexbgh1/delitos-chile/blob/main/data/process_data.ipynb) para crear archivos **.csv** y **.json**
## Data
La información de utilidad (**.json**) se guardó en [otro repositorio](https://github.com/alexbgh1/delitos-chile-data) para hacer la solicitud de datos.

## Preview
![Visitar página]()

## Librería utilizada
- React

## Packages
```
npm i
npm -D tailwindcss postcss autoprefixer
npm i --save chart.js react-chartjs-2
npm install react-datepicker --save
npm install gh-pages --save-dev
```


## Hooks utilizados
- useState -> Guardar estados de variables
- useEffect -> Actualizar estados de variables cuando hay cambios (para fetch)

## Soporte CSS
- [x] Desktop
- [x] Tablet
- [x] Mobile
