import React from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styslesPdf";

export const DocumentPDF = ({ poema }) => {
  return (
    <Document style={{ boxSizing: "border-box" }}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.headerLogo}>
            <Image src="https://picsum.photos/200/300" alt="" />
          </View>
          <View style={styles.viewHeaderTitle}>
            <Text>
              NOTIFICACION EMITIDA CONFORME RESULTADO DEPARTAMENTO SSMA
            </Text>
          </View>
          <View style={styles.viewHeader}>
            <Text style={styles.label}>ID:</Text>
          </View>
          <View style={styles.viewHeader}>
            <Text style={styles.label}>DATA DA EMISSÃO:</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.data}>
            <View style={styles.data1}>
              <View style={styles.panel}>
                <Text style={styles.label}>PLACA:</Text>
                <Text style={styles.labelData}>DBB-6090</Text>
              </View>
              <View style={styles.panel}>
                <Text style={styles.label}>MODELO:</Text>
                <Text style={styles.labelData}>VW</Text>
              </View>
            </View>
            <View style={styles.data2}>
              <Text style={styles.label}>NOME CONDUTOR / INFRATOR:</Text>
              <Text style={styles.labelData}>OTAVIO VAZ ROGERO</Text>
            </View>
            <View style={styles.data2}>
              <Text style={styles.label}>EVIDENCIA:</Text>
              <Text style={styles.labelData}>EXCESSO DE VELOCIDADE 80KM\H</Text>
            </View>
            <View style={styles.data2}>
              <Text style={styles.label}>LOCAL:</Text>
              <Text style={styles.labelData}>
                RODOVIA DOS BANDEIRANTES, KM 190
              </Text>
            </View>
            <View style={styles.data1}>
              <View style={styles.panel}>
                <Text style={styles.label}>VELOCIDADE (KM\H):</Text>
                <Text style={styles.labelData}>90</Text>
              </View>
              <View style={styles.panel}>
                <Text style={styles.label}>DURAÇÃO (S):</Text>
                <Text style={styles.labelData}>120</Text>
              </View>
              <View style={styles.panel}>
                <Text style={styles.label}>HORA INFRAÇÃO:</Text>
                <Text style={styles.labelData}>12:00</Text>
              </View>
            </View>
            <View style={styles.data1}>
              <View style={styles.panel}>
                <Text style={styles.label}>NÍVEL:</Text>
                <Text style={styles.labelData}>ALTO RISCO</Text>
              </View>
              <View style={styles.panel}>
                <Text style={styles.label}>DATA INFRAÇÃO:</Text>
                <Text style={styles.labelData}></Text>
              </View>
              <View style={styles.panel}>
                <Text style={styles.label}>HORA INFRAÇÃO:</Text>
                <Text style={styles.labelData}></Text>
              </View>
            </View>
            <View style={styles.data3}>
              <View style={styles.panel1}>
                <Text style={styles.label}>IDENTICAÇÃO DO EQUIPAMENTO:</Text>
                <Text style={styles.labelData}>031948</Text>
              </View>
              <View style={styles.panel2}>
                <Text style={styles.label}>MODELO:</Text>
                <Text style={styles.labelData}>TERMINAL C21</Text>
              </View>
            </View>
          </View>
          <View style={styles.foto}>
            <Image src="https://picsum.photos/200/300" alt="" />
          </View>
        </View>
        <View style={styles.section3}>
          <View style={styles.viewSection3}>
            <Text style={styles.label}>Tratativa</Text>
            <Text style={styles.labelValue}>
              Enviado mensaje de atención por limite de velocidad
            </Text>
          </View>
          <View style={styles.viewMessage}></View>
        </View>
        <View style={styles.section4}>
          <View style={styles.text}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur recusandae perferendis molestias iste, vel natus
              debitis totam repudiandae maiores animi asperiores sequi
              temporibus enim nobis mollitia voluptates tempora ratione! Magnam.
              Ipsa dolor rerum corporis id. Eum, mollitia cum reprehenderit modi
              maiores hic molestiae nostrum, unde ipsam dicta amet iusto
              accusamus et aliquam consequuntur, veniam minus deserunt dolore
              voluptate cupiditate non.
            </Text>
          </View>
        </View>
        <View style={styles.section5}>
          <View style={styles.date}>
            <Text>
              Local:_________________________, Dia____de__________________de
              20______
            </Text>
          </View>
        </View>
        <View style={styles.section6}>
          <View style={styles.firm}>
            <Text>________________________________________</Text>
          </View>
          <View style={styles.firm}>
            <Text>________________________________________</Text>
          </View>
        </View>
        <View style={styles.section61}>
          <View style={styles.firm}>
            <Text>Conductor/Infractor: Denys Lopez</Text>
          </View>
          <View style={styles.firm}>
            <Text>Gestor</Text>
          </View>
        </View>
        <View style={styles.section7}>
          <View style={styles.viewUser}>
            <Text style={styles.user}>Usuario:</Text>
            <Text style={styles.user}>
              denyslopez.externos@cosmopolita.dt.com
            </Text>
          </View>
          <View style={styles.viewContact}>
            <Text style={styles.labelValue}>
              Millennium Fleet Connect - Gestor de Evidencias
            </Text>
          </View>
        </View>
        <View style={styles.section8}>
          <View style={styles.footer}>
            <Image src="https://picsum.photos/200/300" alt="" />
          </View>
        </View>
      </Page>
    </Document>
  );
};
