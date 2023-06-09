export function addCountyLayer(map, array, len) {
  var county = {
    id: "county-test",
    type: "custom",
    onAdd: function (map, gl) {
      const vertexSource = `
                  uniform mat4 u_matrix;
                  attribute vec2 a_pos;
                  void main() {
                      gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
                  }`;
      const fragmentSource = `
                  void main() {
                      gl_FragColor = vec4(1.0, 1.0, 0.0, 0.5);
                  }`;

      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexSource);
      gl.compileShader(vertexShader);

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentSource);
      gl.compileShader(fragmentShader);

      this.program = gl.createProgram();
      gl.attachShader(this.program, vertexShader);
      gl.attachShader(this.program, fragmentShader);
      gl.linkProgram(this.program);

      this.aPos = gl.getAttribLocation(this.program, "a_pos");
      this.buffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
    },
    onRemove: function () {
      array = [];
    },
    render: function (gl, matrix) {
      gl.useProgram(this.program);
      gl.uniformMatrix4fv(
        gl.getUniformLocation(this.program, "u_matrix"),
        false,
        matrix
      );
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.enableVertexAttribArray(this.aPos);
      gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ZERO, gl.ZERO);
      gl.drawArrays(gl.TRIANGLES, 0, len);
    },
  };

  map.addLayer(county);
}
