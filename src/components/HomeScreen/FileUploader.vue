<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="fileUploadContainer">
      <div class="file has-name">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            id="file"
            ref="file"
            name="csvuploader"
            v-on:change="handleFileUpload()"
          />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">{{ file.name }}</span>
        </label>
      </div>
    </div>
    <div class="submitButtonContainer">
      <button v-if="file.length === 0" class="button is-light">
        Next
      </button>
      <button
        v-if="file.length != 0"
        v-on:click="submitFile()"
        class="button is-success"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";

export default {
  name: "FileUploader",
  data() {
    return {
      file: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    submitFile() {
      var self = this;
      Papa.parse(this.file, {
        complete: function(results) {
          self.goToGraph(results.data);
        }
      });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    goToGraph(csvData) {
      this.$router.push({
        name: "ShowChartScreen",
        params: { csvData }
      });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  flex-direction: column;
  display: flex;
}
.fileUploadContainer {
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  display: flex;
}
.submitButtonContainer {
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  display: flex;
}
</style>
