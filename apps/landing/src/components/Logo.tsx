import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className="flex items-center">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={cn("h-6 w-6", className)}
      >
        <g fill="currentColor">
          <path d="M22.656.191c-.886.047-1.832.16-3.12.383-.4.07-1.481.324-2.11.504-.285.078-1.574.5-1.7.55-.035.017-.257.106-.496.196-.765.301-2.355 1.047-2.75 1.297a.984.984 0 0 1-.144.078.887.887 0 0 0-.137.078c-.066.04-.32.196-.566.34a7.194 7.194 0 0 0-.485.301c-.023.02-.105.074-.191.125l-.152.09 6.05 6.05.262-.132c1.559-.785 3.367-1.305 5.297-1.528.68-.082 2.492-.082 3.172 0 1.7.196 3.184.586 4.652 1.227.407.176 1.14.543 1.348.664.059.04.203.125.316.195a17.54 17.54 0 0 1 2.168 1.547c.364.309 1.434 1.375 1.742 1.742.516.618 1.215 1.582 1.481 2.055.027.05.102.176.16.27.555.918 1.234 2.539 1.508 3.601.02.086.07.27.105.399.075.293.211.96.278 1.39.113.715.152 1.211.164 2.149.015 1.425-.094 2.441-.406 3.804-.18.774-.516 1.79-.836 2.532-.16.37-.641 1.343-.668 1.351-.016.008-.032.028-.032.043 0 .04-.46.809-.68 1.133-.222.324-.699.965-.843 1.137-.82.945-1.383 1.52-2.04 2.066-.648.54-1.425 1.106-1.917 1.39-.785.458-1.48.817-2.023 1.04-.157.062-.329.137-.383.156-.344.156-1.551.531-2.078.656-.594.133-1.309.266-1.7.301-.086.012-.316.035-.511.059-.461.054-2.348.054-2.782.004-.175-.024-.402-.047-.496-.059-.402-.04-1.11-.168-1.715-.305-.527-.125-1.734-.5-2.078-.656-.05-.02-.222-.09-.375-.156-.152-.063-.449-.196-.652-.293l-.375-.18-6.047 6.047.316.207c.172.113.368.234.43.273 1.125.672 2.27 1.25 3.328 1.68.22.086.446.176.496.2.266.117 1.649.578 2.016.675 1.313.348 2.59.61 3.52.719.16.016.414.047.57.062.508.059 1.781.13 2.453.13.672 0 1.945-.071 2.453-.13.156-.015.414-.046.57-.066.977-.117 2.266-.375 3.52-.715.437-.117 1.723-.547 2.016-.676.054-.023.3-.125.546-.222.793-.328.852-.356 1.504-.688a23.64 23.64 0 0 0 2.442-1.39c.406-.258 1.543-1.082 1.734-1.254.043-.04.281-.235.524-.434.832-.676 2.242-2.09 2.98-2.984.781-.95 1.574-2.055 2.05-2.856.29-.492.38-.644.536-.922.25-.453.738-1.445.906-1.84.078-.187.16-.382.188-.433.039-.086.105-.258.355-.895.414-1.078.906-2.89 1.117-4.113l.079-.48c.042-.242.148-1.094.19-1.535.122-1.247.122-3.067-.003-4.383a23.933 23.933 0 0 0-1.953-7.489 32.52 32.52 0 0 0-.824-1.68c-.598-1.058-1.352-2.25-1.688-2.667-.062-.078-.207-.266-.328-.422-1.48-1.977-3.703-4.055-5.793-5.406l-.273-.184c-.063-.055-.774-.48-1.282-.77-.629-.359-1.968-.992-2.734-1.292-.273-.106-.523-.207-.559-.22a38.753 38.753 0 0 0-1.699-.554c-.629-.18-1.71-.433-2.11-.504-1.839-.316-2.956-.418-4.562-.406-.43 0-.992.012-1.246.023ZM3.773 11.398c-.21.344-.418.692-.703 1.196-.273.484-.8 1.605-1.144 2.43C1.109 16.983.5 19.507.293 21.761a26.067 26.067 0 0 0-.004 4.383c.117 1.257.32 2.43.64 3.71.176.704.372 1.356.602 2 .239.668.403 1.09.516 1.344.015.035.094.215.172.403.254.601.804 1.675 1.226 2.398.278.465.868 1.398.903 1.422.015.008 1.375-1.336 3.023-2.988l3.008-3.004-.277-.555a12.91 12.91 0 0 1-.649-1.488 15.865 15.865 0 0 1-.8-3.082c-.22-1.446-.22-3.266.003-4.692.16-1.02.414-1.996.778-3.023.109-.309.449-1.11.574-1.356l.078-.156-6.07-6.07Zm0 0" />
          <path d="M23.328 16.691a8.436 8.436 0 0 0-1.973.47 7.35 7.35 0 0 0-3.78 3.335c-.4.742-.637 1.457-.798 2.352-.078.472-.078 1.789.004 2.257.41 2.32 1.723 4.172 3.746 5.293 2.254 1.239 5.157 1.145 7.36-.246.527-.336 1.133-.836 1.504-1.25.976-1.097 1.57-2.328 1.828-3.797.082-.472.082-1.789.004-2.257-.239-1.348-.7-2.395-1.496-3.407-1.141-1.437-2.676-2.351-4.52-2.675-.348-.067-1.5-.11-1.879-.075Zm0 0" />
        </g>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 257 257"
        className={cn("h-6 w-6", className)}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M.8 129c0-26.7 8.1-51.4 22-71.9l33.6 33.6a82.8 82.8 0 0 0-1.4 74l-33.7 33.8c-13-20-20.5-44-20.5-69.6Zm92-74.1L59.2 21.4A128 128 0 1 1 57 235l33-33a83.1 83.1 0 1 0 2.7-147Zm9.4 46.3a39.8 39.8 0 1 0 56.3 56.3 39.8 39.8 0 0 0-56.3-56.3Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}
